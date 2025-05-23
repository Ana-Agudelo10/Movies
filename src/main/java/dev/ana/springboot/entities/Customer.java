package dev.ana.springboot.entities;

//Modelo
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.*;

@Entity
//Clase que esta
@Table(name = "movies")
//Tabla de la bd
// Anotaciones
@Setter
@Getter
//
@ToString
@EqualsAndHashCode
public class Customer {
    //Id de la tabla
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String genero;
    private String image;
    private String date;
    private String creator;
    private String video;
}
//}