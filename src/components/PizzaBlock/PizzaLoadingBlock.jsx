import ContentLoader from "react-content-loader"

function PizzaLoadingBlock() {
    return (
        <ContentLoader 
        speed={2}
        width={260}
        height={400}
        viewBox="0 0 260 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
     
      >
        <rect x="37" y="153" rx="0" ry="0" width="0" height="2" /> 
        <circle cx="127" cy="124" r="104" /> 
        <rect x="8" y="290" rx="0" ry="0" width="352" height="115" /> 
        <rect x="6" y="422" rx="0" ry="0" width="293" height="99" /> 
        <rect x="244" y="460" rx="0" ry="0" width="2" height="10" /> 
        <rect x="7" y="238" rx="0" ry="0" width="250" height="41" />
      </ContentLoader>
      )
}

export default PizzaLoadingBlock;