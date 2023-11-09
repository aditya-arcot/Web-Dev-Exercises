import { useState } from "react"

export default function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    })
    const [productValid, setProductValid] = useState(false)
    const validateProduct = (value) => {
        setProductValid(value.length !== 0)
    }
    const handleChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        if (name === "product") validateProduct(value)
        setFormData(currData => {
            return {
                ...currData,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!productValid) return
        addItem(formData)
        setFormData({ product: "", quantity: 0 })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input type="text" name="product" id="product" placeholder="product name"
                onChange={handleChange} value={formData.product}></input>
            {!productValid && <p style={{ color: "red" }}>Product cannot be empty</p>}
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" placeholder="1"
                onChange={handleChange} value={formData.quantity}></input>
            <button disabled={!productValid}>Add Item</button>
        </form>
    )
}