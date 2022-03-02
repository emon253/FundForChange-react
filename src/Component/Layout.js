
export default function Layout({ children }) {
  document.title = "Fund For Change"

  return (
    <>
   
      <main >     
        <div style={{ marginTop: 100}} className='container'  >{children}</div>
      </main>
    </>
  );
}
