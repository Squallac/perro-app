// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dogs from "../../../data/dogs";

function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const currentDog = dogs.filter((dog) => dog.id === Number(id))[0];

    if (!currentDog) return res.json({ status: "fail" });

    res.json({ status: "success", dog: currentDog });
  } else {
    // Handle any other HTTP method
  }
}

export default handler;
