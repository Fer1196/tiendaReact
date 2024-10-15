import { Cart } from "../../components/Cart/Carts";
import { useCart } from "../../hooks/useCart";
import { ProductCart } from "../../utils/interfaces/Product";
import "./DetailCar.css";
export function DetailCar() {
  const { cart } = useCart();
  let total: number = 0;
  return (
    <>
      <Cart />
      <div className="cart">
        <h1 className="cart-title">Carrito a Pagar</h1>

        <div className="cart-title-row">
          <div className="row-first">
            <span className="cart-span">Qauntity</span>
          </div>
          <div className="row-second">
            <span className="cart-span">Image</span>
          </div>
          <div className="row-third">
            <span className="cart-span">Detail Product</span>
          </div>
          <div className="row-four">
            <h2> Unit Price</h2>
          </div>
          <div className="row-five">
            <h2> Total Price</h2>
          </div>
        </div>

        {cart.map((ele: ProductCart) => {
          total += ele.price * ele.quantity;
          return (
            <div className="cart-list">
              <div className="row-first">
                <span className="cart-span">{ele.quantity}</span>
              </div>
              <div className="row-second">
                <img src={ele.thumbnail} className="list-img"></img>
              </div>
              <div className="row-third">
                <span className="cart-span">{ele.title}</span>
              </div>
              <div className="row-four">
                <span className="cart-span">{ele.price}</span>
              </div>
              <div className="row-five">
                <span className="cart-span">
                  {(ele.price * ele.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <h2>Total Price: </h2>

            <h1>$ {total.toFixed(2)}</h1>
          </div>
        </div>

        <button className="cart-button">Pay</button>
      </div>
    </>
  );
}
