export async function GET() {
  try {
    const res = await fetch("https://abhayenterprise.com/wp-json/wp/v2/testimonials-acf", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("WordPress API fetch failed with status:", res.status);
      return new Response(JSON.stringify({ error: "Failed to fetch testimonials" }), {
        status: res.status,
      });
    }

    const data = await res.json();
    console.log("✅ WordPress response data:", data); // Add this to debug

    if (!Array.isArray(data)) {
      return new Response(JSON.stringify({ error: "Expected array but got invalid format", raw: data }), {
        status: 500,
      });
    }

    const formatted = data.map((item) => {
      const fields = item.acf || {};
      return {
        name: fields.name,
        designation: fields.designation,
        company_name: fields.company_name,
        message: fields.message,
        image: fields.image?.url || "/placeholder.png",
      };
    });

    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Internal API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
