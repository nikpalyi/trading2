package com.asg.trade.repositories;

import com.asg.trade.models.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {

}