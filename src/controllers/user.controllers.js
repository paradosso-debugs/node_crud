const {users} = require('../database/db')
const {v4:uuid} = require('uuid')


const getUsers = (req, res) => {
    return res.json({
    ok: true,
    msg: 'Usuarios Obtenidos',
    data: users,
    })
    }


   const createUser =  (req, res) => {
        const {name, curso} = req.body
        const user= {
            id:uuid(),
            name,
            curso,
        }
        users.push(user)
        return res.json({
        ok: true,
        msg: 'Usuario Agregado',
        data: user,
        })
        }

const updateUser =  (req, res) => {
    const {id}= req.params
    const {name, curso} = req.body

    const user = users.find(user => user.id === id)

    user.name = name
    user.curso = curso


    return res.json({
    ok: true,
    msg: 'Usuario Actualizado',
    data: user,
    })
    }

    const deleteUser =   (req, res) => {
        const {id}= req.params
      
        const user = users.find((user) => user.id === id)
    
        users.splice(users.indexOf(user), 1)
        
    
    
        return res.json({
        ok: true,
        msg: 'Usuario Eliminado',
        data: user,
        })
        }

        module.exports = {getUsers, createUser, updateUser, deleteUser}
