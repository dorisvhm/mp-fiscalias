/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mp.mpwb.modelo.ws;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import java.util.Set;

/**
 *
 * @author dherrera
 */
@ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    public ApplicationConfig() {
        System.out.println("creandooooo");
    }

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.mp.mpwb.resources.NewCrossOriginResourceSharingFilter.class);
        resources.add(com.mp.mpwb.modelo.ws.FiscaliaFacadeREST.class);
        resources.add(com.mp.mpwb.modelo.ws.DepartamentoFacadeREST.class);
        resources.add(com.mp.mpwb.modelo.ws.MunicipioFacadeREST.class);
       
    }
    

    
}
