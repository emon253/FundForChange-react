import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  document.title = "Fund For Change"

  return (
    <>
   
      <main >     
        <div style={{ marginTop: 80}} className='container'  >{children}</div>
      
      </main>
    </>
  );
}
