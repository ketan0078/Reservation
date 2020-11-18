import React from 'react'
import rooms from './roominfo'
import Room from './room'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


  
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        marginTop: '10rem'
    },
    gridContainer: {
        paddingLeft: '7rem',
        paddingRight: '2rem',
        // height: '50rem',
        // width: '85rem',
        // overflowX: 'hidden'

    }
}))

function Allrooms(){
    const classes = useStyles();
    
return (
    <div className={classes.root}>
        <h1 className="header head__allrooms" >All Awesome Rooms From Our Hotel!</h1>
<Grid container direction="row"
className={classes.gridContainer}
justify="space-evenly"
alignItems="center"
alignContent="center"

 >
{rooms.map((room) => {
     return (
        <Grid xs={12} sm={6} md={4}  item >
    <Room 
        
        number={room.num}
        key={room.id}
        name={room.name}
        type={room.type}
        description={room.description}
        floor={room.floor}
        price={room.price}
        url={room.url}
        capacity={room.capacity}
    />
    </Grid>
    

    )
})}

</Grid> 
</div>

)
    
}
export default Allrooms
