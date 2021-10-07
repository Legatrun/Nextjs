import NavBar from "./navbar";

export default function Layout({children}) {
    return (
        <div>
            <NavBar/>
            <main>
                {children}
            </main>
            {/* para que los estilos seran globales le añadimos el "global" a nuestro style */}
            <style jsx>
                {`
                    div{
                        min-height: 100vh;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                    }
                    main{
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                    }
                `}
            </style>
            <style jsx global> 
                {`
                    html,
                    body{
                        padding:0;
                        margin:0;
                    }
                    *{
                        box-sizing: border-box;
                    }
                `}
            </style>
        </div>
    )
}
