import clientPromise from "./mongodb";

export async function getMostViewData() {
    const client = await clientPromise;

    const db = client.db("khophim-db");

    let bangXepHangData = await db.collection("phim").find({}).sort({ "view": -1 }).limit(10).toArray();
    bangXepHangData = JSON.parse(JSON.stringify(bangXepHangData));


    return bangXepHangData;
}