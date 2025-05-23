package dev.ana.springboot.services;

import dev.ana.springboot.entities.Customer;

import java.util.List;


public interface ICustomerService {
    List<Customer> getAll();
    Customer save(Customer customer);

    void delete(Long id);
    Customer update(Long id, Customer customer);

}
