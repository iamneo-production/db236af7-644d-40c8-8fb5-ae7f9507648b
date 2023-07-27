package com.examly.springapp.service.implementation;

import com.examly.springapp.model.*;
import com.examly.springapp.repository.*;
import com.examly.springapp.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private GiftRepo giftRepo;
    @Autowired
    private ThemeRepo themeRepo;

    @Autowired
    private UserRepo userRepo;
    @Override
    public String addOrder(Order data) {
        orderRepo.save(data);
        return "Order Added";
    }
    public OrderResponse setOrderResponse(Order order, GiftModel giftModel, List<ThemeModel> selectedThemes)
    {
        return new OrderResponse(
                order.getOrderId(),
                order.getOrderDescription(),
                selectedThemes,
                giftModel,
                order.getOrderDate(),
                order.getOrderPrice(),
                order.getOrderAddress(),
                order.getOrderPhone(),
                order.getOrderEmail()
        );
    }

    public List<ThemeModel> getThemesDetails (Set<Integer> themeIds)
    {
        List<ThemeModel> selectedThemes = new ArrayList<>();
        for (Integer themeId : themeIds)
        {
            ThemeModel theme = new ThemeModel();
            Optional<ThemeModel> optTheme = themeRepo.findById(themeId);
            if(optTheme.isPresent())
                theme = optTheme.get();
            else {
                theme.setThemeId(themeId);
                theme.setThemeDetails("Details Unavailable");
            }
            selectedThemes.add(theme);
        }
        return selectedThemes;
    }

    public GiftModel getGiftDetails(Integer giftId){

        Optional<GiftModel> optionalGiftModel = giftRepo.findById(giftId);
        GiftModel giftModel = new GiftModel();

        if(optionalGiftModel.isPresent())
            giftModel = optionalGiftModel.get();
        else {
            giftModel.setGiftId(giftId);
            giftModel.setGiftDetails("Details Unavailable");
        }

        return giftModel;
    }

    @Override
    public List<OrderResponse> orderHistory(String email) {
        List<OrderResponse> userOrderHistory = new ArrayList<>();
        for(Order order : findAllByOrderEmail(email))
        {
            userOrderHistory.add(
                    setOrderResponse(order, getGiftDetails(order.getGiftId()), getThemesDetails(order.getThemes()))
            );
        }
        return userOrderHistory;
    }

    @Override
    public List<OrderResponse> viewAllOrders() {
        List<OrderResponse> allOrders = new ArrayList<>();
        for(Order order : orderRepo.findAll())
        {
            allOrders.add(
                    setOrderResponse( order, getGiftDetails(order.getGiftId()), getThemesDetails(order.getThemes()) )
            );
        }
        return allOrders;
    }

    @Override
    public List<OrderResponse> viewOrder(int orderId) {
        List<OrderResponse> orderResponses = new ArrayList<>();

        Optional<Order> optOrder = orderRepo.findById(orderId);
        if(optOrder.isEmpty())
            return null;

        Order order = optOrder.get();
        orderResponses.add(setOrderResponse(order, getGiftDetails(order.getGiftId()), getThemesDetails(order.getThemes())));
        return orderResponses;
    }

    @Override
    public void deleteOrder(int orderId) {
        orderRepo.deleteById(orderId);
    }

    @Override
    public List<Order> findAllByOrderEmail(String email) {

        return orderRepo.findAllByOrderEmail(email);
    }

    @Override
    public String editOrder(int orderId, Order data){
        Optional<Order> optOrder=orderRepo.findById(orderId);
        if(optOrder.isEmpty()){
            return "Invalid orderId";
        }
        Order existOrder=optOrder.get();
        existOrder.setGiftId(data.getGiftId());
        existOrder.setOrderAddress(data.getOrderAddress());
        existOrder.setOrderDate(data.getOrderDate());
        existOrder.setOrderDescription(data.getOrderDescription());
        existOrder.setOrderEmail(data.getOrderEmail());
        existOrder.setOrderPhone(data.getOrderPhone());
        existOrder.setOrderPrice(data.getOrderPrice());
        existOrder.setThemes(data.getThemes());
        orderRepo.save(existOrder);
        return "Order edited";
    }
}
