import getResults from "../request";
import ResultsAndPasser from "../ResultsAndPasser";

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    

    const response = await getResults({search: searchParams.search as string, page: parseInt(searchParams.page as string)});

    return(
        <ResultsAndPasser {...{response: response, ifSearch: "search="+searchParams.search}}/>
    )
}