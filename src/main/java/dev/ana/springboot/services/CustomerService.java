package dev.ana.springboot.services;
import dev.ana.springboot.entities.Customer;
import dev.ana.springboot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.NodeList;

import java.util.List;
import java.util.Optional;

//Servicio
@Service
public class CustomerService implements ICustomerService {

    @Autowired CustomerRepository CustomerRepository;

    @Override
    public List<Customer> getAll(){
        return (List<Customer>) CustomerRepository.findAll();
    }

    @Override
    public Customer save(Customer customer){
        return CustomerRepository.save(customer);
    }


    public Customer getMovieById(Long id) {
        Optional<Customer> optionalCustomer = CustomerRepository.findById(id);
        return optionalCustomer.get();
    }

    @Override
    public void delete(Long id) {
        Customer optionalCustomer = getMovieById(id);
        CustomerRepository.deleteById(optionalCustomer.getId());
    }

    @Override
    public Customer update(Long id, Customer updatedCustomer) {
        Customer existingCustomer = getMovieById(id);

        existingCustomer.setTitle(updatedCustomer.getTitle());
        existingCustomer.setDescription(updatedCustomer.getDescription());
        existingCustomer.setGenero(updatedCustomer.getGenero());
        existingCustomer.setImage(updatedCustomer.getImage());
        existingCustomer.setDate(updatedCustomer.getDate());
        existingCustomer.setCreator(updatedCustomer.getCreator());
        existingCustomer.setVideo(updatedCustomer.getVideo());

        return CustomerRepository.save(existingCustomer);
    }


}
