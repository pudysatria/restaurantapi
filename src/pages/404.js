import React from 'react'

const NotFound = () => {
    const styles = {
        contain:{
            height:"80vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
        }
    }
    return (
        <div style={styles.contain}>
            <div>
            <h1>404</h1>
            <h4>Page Not Found</h4>
            </div>
        </div>
    )
}

export default NotFound
