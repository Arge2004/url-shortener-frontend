import type { APIRoute } from 'astro';

const BACKEND_URL = 'http://13.58.106.198';

export const GET: APIRoute = async ({ params }) => {
  try {
    const { shortCode } = params;
    
    if (!shortCode) {
      return new Response(JSON.stringify({ error: 'Short code is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const response = await fetch(`${BACKEND_URL}/api/urls/${shortCode}`);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'URL not found' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching URL stats:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { shortCode } = params;
    
    if (!shortCode) {
      return new Response(JSON.stringify({ error: 'Short code is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const response = await fetch(`${BACKEND_URL}/api/urls/${shortCode}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to delete URL' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error('Error deleting URL:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
