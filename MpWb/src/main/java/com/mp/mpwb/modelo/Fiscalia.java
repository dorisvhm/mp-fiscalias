/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mp.mpwb.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.io.Serializable;


/**
 *
 * @author dherrera
 */
@Entity
@Table(name = "Fiscalia", catalog = "MP", schema = "dbo")
@NamedQueries({
    @NamedQuery(name = "Fiscalia.findAll", query = "SELECT f FROM Fiscalia f"),
    @NamedQuery(name = "Fiscalia.findById", query = "SELECT f FROM Fiscalia f WHERE f.id = :id"),
    @NamedQuery(name = "Fiscalia.findByNombre", query = "SELECT f FROM Fiscalia f WHERE f.nombre = :nombre"),
    @NamedQuery(name = "Fiscalia.findByTelefono", query = "SELECT f FROM Fiscalia f WHERE f.telefono = :telefono"),
    @NamedQuery(name = "Fiscalia.findByDireccion", query = "SELECT f FROM Fiscalia f WHERE f.direccion = :direccion"),
    @NamedQuery(name = "Fiscalia.findByIdMunicipio", query = "SELECT f FROM Fiscalia f WHERE f.idMunicipio = :idMunicipio")})
public class Fiscalia implements Serializable {

    private static final long serialVersionUID = 1L;
   @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "nombre")
    private String nombre;
    @Size(max = 50)
    @Column(name = "telefono")
    private String telefono;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "direccion")
    private String direccion;
    @Basic(optional = false)
    @Column(name = "idMunicipio")
    private int idMunicipio;

    public Fiscalia() {
    }

    public Fiscalia(Integer id) {
        this.id = id;
    }

    public Fiscalia(Integer id, String nombre, String direccion, int idMunicipio) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.idMunicipio = idMunicipio;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getIdMunicipio() {
        return idMunicipio;
    }

    public void setIdMunicipio(int idMunicipio) {
        this.idMunicipio = idMunicipio;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Fiscalia)) {
            return false;
        }
        Fiscalia other = (Fiscalia) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mp.mpwb.modelo.Fiscalia[ id=" + id + " ]";
    }
    
}
