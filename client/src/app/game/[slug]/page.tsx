import { gameDetails } from "@/app/types";
import getDetails from "./request"

export default async function Page({
    params
}: {
    params: { slug: string}
}) {
    const response: gameDetails = await getDetails({game: params.slug});
}