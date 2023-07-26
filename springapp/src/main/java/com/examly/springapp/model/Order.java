package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders_table")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderId;
    private String orderEmail;
    private String customerName;
    private Integer giftId;
    private String orderDescription;
    private Double orderPrice;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date orderDate;
    private String orderAddress;
    private String orderPhone;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "selected_themes",
            joinColumns = @JoinColumn(name = "orderId")
    )
    private Set<Integer> orderThemes;

}
