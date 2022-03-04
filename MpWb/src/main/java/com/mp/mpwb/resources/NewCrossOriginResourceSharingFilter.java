/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mp.mpwb.resources;

/**
 *
 * @author dherrera
 */
@jakarta.ws.rs.ext.Provider
public class NewCrossOriginResourceSharingFilter implements jakarta.ws.rs.container.ContainerResponseFilter {

    public NewCrossOriginResourceSharingFilter(){
                System.out.println("registrando filtro de cross");

    }
    @Override
    public void filter(jakarta.ws.rs.container.ContainerRequestContext requestContext, jakarta.ws.rs.container.ContainerResponseContext response) {
        System.out.println("pasando filtro");
        //response.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
        //response.getHeaders().putSingle("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
        //response.getHeaders().putSingle("Access-Control-Allow-Headers", "*");
        response.getHeaders().add(
            "Access-Control-Allow-Origin", "*");
          response.getHeaders().add(
            "Access-Control-Allow-Credentials", "true");
          response.getHeaders().add(
           "Access-Control-Allow-Headers",
           "origin, content-type, accept, authorization");
          response.getHeaders().add(
            "Access-Control-Allow-Methods", 
            "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    }
    
}
