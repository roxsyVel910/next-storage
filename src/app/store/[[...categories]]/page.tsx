interface CategoriesProps{
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default function Categories(props: CategoriesProps){
    console.log(props)
    const{categories} = props.params 
    return(
        <h1> Category dinamica: ({categories})</h1>
    )
}