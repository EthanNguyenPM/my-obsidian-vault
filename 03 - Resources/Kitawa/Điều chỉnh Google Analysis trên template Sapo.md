---
tags:
  - resources
  - kitawa
  - google_analysis
---
## Các events có sẵn mà Sapo hỗ trơ

Theo website hỗ trợ của Sapo, thì sapo hỗ trợ các event như thế này:
- view_item
- add_to_cart
- begin_checkout
- add_shipping_info
- add_payment_info
- purchase

[Các sự kiện hỗ trợ trên sapo](https://help.sapo.vn/cac-su-kien-google-analytics-4-ho-tro-tren-sapo?utm_source=chatgpt.com)

## Cài các sự kiện mới cho template Kitawa trên Sapo

Bởi vì Sapo đã hỗ trợ các events trên cho mình, chúng ta không thể can thiệp cách sử dụng và push events này qua gtag function. Nhưng chúng ta có thể tạo các events mong muốn qua dataLayer

## Cách tích hợp và send event cho google

Sau khi đã thêm Google Tag Manager script cho trang website, chúng ta có thể follow và send các event qua gtag function hoặc có thể sử dụng dataLayer để push các event vào hàng đợi. Google Tag Manager sẽ bắt trigger từ hàng đợi này.

[Document DataLayer](https://developers.google.com/tag-platform/tag-manager/datalayer?hl=en)