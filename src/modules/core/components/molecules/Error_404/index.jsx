import "./style2.scss"

export default function Error_404() {

return (
    <div className="error">
      <div className="container-2">
        <div className="row">
          <div className="col">
            <div className="text">
            <h2 className="n1">404 PAGE NOT FOUND</h2>
            <h6 className="n2">Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</h6>
            </div>
          </div>
          <div className="col">
            <img className="imagen_2f" src="/images/404.png"></img>
          </div>
        </div>

      </div>
    </div>
  );
}