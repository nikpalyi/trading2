package com.asg.trade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.asg.trade.models.Trade;
import com.asg.trade.repositories.TradeRepository;

@RestController
@RequestMapping("/trade")
public class TradeController {
    @Autowired
    private TradeRepository tradeRepository;


    @GetMapping
    public List<Trade> list() {
        return tradeRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Trade trade) {
        System.out.println(trade.getCompanyName());
        tradeRepository.save(trade);
    }

    @GetMapping("/{id}")
    public Trade get(@PathVariable("id") long id) {
        return tradeRepository.getOne(id);
    }

}
