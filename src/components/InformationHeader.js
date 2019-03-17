import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import headerImage from "./headerImage2.png";
import { withStyles } from '@material-ui/core';

const styles = {
    
    card: {
       position: 'relative',
       paddingTop: 10,
       paddingBottom: 10
    },
    overlay: {
       position: 'absolute',
       top: '40px',
       left: '20px',
       color: 'black',
       backgroundColor: '#E5E5E5',
    },
   
    title:{
        fontFamily: "Helvetica",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    text: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '10px',
        marginBottom: 20,
        textAlign: "left",
        fontSize: 18,
        lineheight: 2
    },
    button: {
      marginBottom:20,
      backgroundColor: '#993427',
      color: 'white',
      height: 40,
      fontWeight: "bold",
      raised: true
    },
 };

class Information extends Component {
    render() {
        return (
        
      
            <section>
            <Card className="bg-dark text-white" style={styles.card}>
            <Card.Img src= {headerImage} alt="Card image" style= {styles.image} />
            <Card.ImgOverlay style= {styles.overlay}>
              <Card.Title style= {styles.title}>Mapping</Card.Title>
              <Card.Text style= {styles.text}> prone areas prepare themselves and their family for 
              an earthquake. We help provide a readiness plan that is 
              customized for each person based on their living situation as 
              well as scenarios on what to do during earthquakes. Its never too early
              to start building your readiness plan.
              </Card.Text>            
            </Card.ImgOverlay>
          </Card>
          
               </section>
        );
    }
};

export default withStyles(styles)(Information);