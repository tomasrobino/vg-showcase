import getDetails from "./request"

export default async function Page({
    params
}: {
    params: { slug: string}
}) {
    const response = await getDetails({game: params.slug});
}