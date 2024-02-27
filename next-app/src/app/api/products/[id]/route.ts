export const UPDATE = async (req: NextRequest, res: NextResponse) => {
    req = await req.json();
    let updated = req.product;
    let id = req.id;

    if (!product) {
        return new NextResponse({ error: "product not found that will be update" });
    }

    if (!id) {
        return new NextResponse({ error: "product id not found that will be update" });
    }

    let ack = await Product.updateOne({}, { updated })

    if (ack) {
        return new NextResponse({ ack });
    }

    return new NextResponse.json({ error: "database error" });
}