package dev.ana.springboot.controllers;


import dev.ana.springboot.entities.Customer;
import dev.ana.springboot.repository.CustomerRepository;
import dev.ana.springboot.services.CustomerService;
import dev.ana.springboot.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("movie")
    public List<Customer> getAll(){
        return customerService.getAll();
    }

    @GetMapping("movie/{id}")
    public ResponseEntity<Customer> getById(@PathVariable Long id) {
        Customer customer = customerService.getMovieById(id);
        return ResponseEntity.status(HttpStatus.OK).body(customer);
    }

    @PostMapping("movie")
    public ResponseEntity<Customer> save(@RequestBody Customer customer){
        Customer savedCustomer = customerService.save(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
    }

    @DeleteMapping("movie/{id}")
    public ResponseEntity<Map<String, String>> delete(@PathVariable Long id) {
        customerService.delete(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "deleted successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("movie/{id}")
    public ResponseEntity<Map<String, String>> update(@PathVariable Long id, @RequestBody Customer updatedCustomer) {
        customerService.update(id, updatedCustomer);
        Map<String, String> response = new HashMap<>();
        response.put("message", "updated successfully");
        return ResponseEntity.ok(response);
    }





}


