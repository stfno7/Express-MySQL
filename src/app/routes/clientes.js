
const dbConnection = require ('../../config/dbConnection');

module.exports = app=>{
    const conexion = dbConnection();
    app.get('/', (req,res)=>{
        
        conexion.query('SELECT * FROM clientes',(err, result)=>{
            console.log(result);
            res.render('clientes.ejs',{
                clientes: result
            });
        });
        
    });
    app.post('/clientes', (req,res)=>{
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;

        conexion.query('INSERT INTO clientes SET?',{
            nombre,
            apellido,},
            (err, result)=>{
                res.redirect('/');
            }
        )
    });
    
    app.post('/borrar', (req,res)=>{
        const id=req.body.registroId;
        const query = 'DELETE FROM clientes WHERE id_clientes = ?';
        
        conexion.query(query,[id],(err,result)=>{
            if(err){
                console.error('Error al borrar el registro:', err);
                res.status(500).send('Error al borrar el registro');
            }else {
                console.log('Registro borrado');
                res.redirect('/')
            }
        });
    });


    app.post('editar', (req,res)=>{
        const id=req.body.registroId;
        const {nombre , apellido} =req.body;
        const query= 'UPDATE clientes SET nombre=?, apellido=? WHERE id_clientes=?'

        conexion.query(query, [nombre, apellido, id], (err, result)=>{
            if (err) {
                console.error('Error al editar registro: ', err)
                res.status(500).send('Error al editar el registro');
            }else{
                console.log('Registro editado correctamente');
                res.redirect('/');
            }
        });

    });
};

