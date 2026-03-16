package com.example.experiment_7_springboot2.entity;
//sumanyu singh 23BCS10801
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//SUMANYU SINGH 23BCS10801
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String disease;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
}