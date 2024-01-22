import React, {  } from "react";
import Filter from "./Filter";

export default function FilterBar() {
    
   
    return (
        <div style={{
            marginTop: "10px",
            width: "100%"
        }}>
            <Filter {...{concept: "ordering", default: "-relevance", items: [
                ["-released", "Newest"],
                ["released", "Oldest"],
                ["-rating", "Rating"],
                ["name", "Name"],
                ["-relevance", "Relevance"]
            ]}}/>
        </div>
    )
}