import "./createSaleForm.css"
function CreateSaleForm() {
  return (
    <>
        <section>
            <h1 className="text-2xl font-semibold text-softBlack">Crear Venta</h1>
            <form>
                <fieldset>
                    <label htmlFor="product-list">Cantidad de productos</label>
                    <textarea name="product-list" rows={5} cols={30}></textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor="total-price">Importe a pagar</label>
                    <input type="text" id="total-price"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="payment-method">Medio de pago</label>
                    <select name="" id="">
                        <option value="cash">Efectivo</option>
                        <option value="debit">Débito</option>
                        <option value="credit">Crédito</option>
                        <option value="transfer">Transferencía</option>
                    </select>
                </fieldset>
                <div>
                    <button className="bg-softBlack" type="submit" id="submit-btn">Crear Venta</button>
                    <button className="bg-darkGray" type="reset" id="reset-btn">Borrar Datos</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default CreateSaleForm