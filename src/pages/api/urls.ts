import type { APIRoute } from 'astro';

const BACKEND_URL = 'http://13.58.106.198';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to create short URL' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const shortUrl = await response.text();
    
    return new Response(shortUrl, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error creating short URL:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
