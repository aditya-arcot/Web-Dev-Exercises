import { useState } from "react"

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    })
    const handleChange = evt => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formData)
        setFormData({ product: "", quantity: 0 })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input type="text" name="product" id="product" placeholder="product name"
                onChange={handleChange} value={formData.product}></input>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" placeholder="1"
                onChange={handleChange} value={formData.quantity}></input>
            <button>Add Item</button>
        </form>
    )
}