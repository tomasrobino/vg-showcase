import ResultsAndPasser from "../../ResultsAndPasser";
import getResults from "../../request";

export default async function Page() {
    const today = new Date();
    const monthAgo = new Date(today.getTime() - 2629800000);
    const response = await getResults({dates: `${monthAgo.getFullYear()}-${("0"+monthAgo.getMonth()).slice(-2)}-${("0"+monthAgo.getDate()).slice(-2)},${today.getFullYear()}-${("0"+today.getMonth()).slice(-2)}-${("0"+today.getDate()).slice(-2)}`, page: 1, ordering: "released"});

    return(
        <ResultsAndPasser {...{response: response, ifSearch: ""}}/>
    )
}