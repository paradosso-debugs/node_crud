const {movies} = require('../database/db')
const {v4:uuid} = require('uuid')


const getMovies = (req, res) => {
    return res.json({
    ok: true,
    msg: 'Peliculas obtenidas',
    data: movies,
    })
    }


   const createMovie =  (req, res) => {
        const {title, year,price} = req.body
        const movie= {
            id:uuid(),
          title,
            year,
            price
        }
        movies.push(movie)
        return res.json({
        ok: true,
        msg: 'Pelicula Agregada',
        data: movie,
        })
        }

const updateMovie =  (req, res) => {
    const {id}= req.params
    const {title, year, price} = req.body

    const movie = movies.find(movie => movie.id === id)

    movie.title = title
    movie.year = year
    movie.price = price


    return res.json({
    ok: true,
    msg: 'Pelicula Actualizada',
    data: movie,
    })
    }

    const deleteMovie =   (req, res) => {
        const {id}= req.params
      
        const movie = movies.find((movie) => movie.id === id)
    
        movies.splice(movies.indexOf(movie), 1)
        
    
    
        return res.json({
        ok: true,
        msg: 'Pelicula Eliminada',
        data: movie,
        })
        }

        module.exports = {getMovies, createMovie, updateMovie, deleteMovie}
