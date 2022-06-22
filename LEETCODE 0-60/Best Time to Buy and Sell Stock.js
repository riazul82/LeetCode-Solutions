function maxProfit(prices) {
    let prevPrices = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] >= prevPrices) {
            if (prices[i] - prevPrices > maxProfit) {
                maxProfit = prices[i] - prevPrices;
            }
        } else {
            prevPrices = prices[i];
        }
    }

    return maxProfit;
}