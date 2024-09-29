

import express from 'express'

const PORT = 3000
const app = express()




app.get('/api/users', (req, res) => {
    res.status(200).json({ message: 'All users are showing here' });
})



app.listen(PORT, () => {
    console.log(`Server is listening here: http://localhost:${PORT}`)
})
