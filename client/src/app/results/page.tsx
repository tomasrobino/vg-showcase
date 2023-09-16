import ResultsAndPasser from "./ResultsAndPasser";
import getResults from "./request";


export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

    const response = await getResults({...searchParams});

    return(
        <ResultsAndPasser {...{response: response}}/>
    )
}