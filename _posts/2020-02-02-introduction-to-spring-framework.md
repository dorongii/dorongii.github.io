---
layout: post
title:  "Spring Framework 소개"
author: "Joy"
categories: spring
---

# 들어가기 전에

자바 웹 개발을 하다보면 듣지 않을 수 없는 그 이름, 스프링 프레임워크(Spring framework).
처음 들어본 사람들을 위해 간단한 소개글을 작성하였다.

> 이 글은 [스프링 공식 사이트 및 문서](https://spring.io/)들을 참고하여 작성했다.

# 스프링 프레임워크란?

![Placeholder image]({{site.img_dir}}/{{page.slug}}/spring-logo.png)

## 언제 사용하는 걸까?

스프링 프레임워크는 자바 엔터프라이즈 어플리케이션을 용이하게 개발하기 위해 사용한다.

여러가지 자바 어플리케이션 구조를 지원하기 때문에, 필요에 따라 스프링 프로젝트 내의 여러 가지 프레임워크를 이용할 수 있다.

## 'Spring'이라는 이름의 유래

스프링 프레임워크의 초창기 개발자 중 한 명인 로드 존슨(Rod Johnson)이 [직접 작성한 글](https://spring.io/blog/2006/11/09/spring-framework-the-origins-of-a-project-and-a-name)이 있다.<br>
로드 존슨이 2000년에 에베레스트 등반을 했는데, 이에 영감을 얻은 동료 얀(Yann)이 자연에 입각해 'Spring'이라는 단어를 제안했다고 한다. 또, 과거의 'J2EE의 겨울'을 보내고 새로운 시작인 '봄'을 의미한다고 한다.

## 스프링 프레임워크에는 어떤 것이 있을까?

이 글에서 스프링 프레임워크는 모(母) 프로젝트를 의미한다.
이 프로젝트에는 여러 프레임워크들이 있는데, 그 중 이름을 들어봤을 법한 프로젝트들을 간단하게 살펴보자.<br>
(언젠가는 각 프로젝트에 대한 포스팅을 할 수 있는 날이 오길!!)

각 항목에는 공식 문서 링크를 걸어놓았다.

- [Servlet-based Spring MVC web framework](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc)
    - Servlet을 기반으로 만들어진, 스프링 프레임워크의 초반부터 포함된 웹 프레임워크이다.
- [Spring WebFlux reactive web framework](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux)
    - Spring MVC가 Servlet을 기반으로 만들어졌다면, Spring WebFlux는 완전히 논블로킹(non-blocking)으로 동작하는 reactive-stack 웹 프레임워크이다.
    - 스프링 5.0에 추가되었다.
    - 필요에 따라 Spring web MVC와 혼용해서 사용할 수 있다.
- [Spring Cloud](https://cloud.spring.io/spring-cloud-static/Hoxton.SR1/reference/html/index.html)
    - 분산 시스템을 위한 프로젝트이다.
    (설명이 너무 간단한데, 분산 시스템에 대해서는 경험이 전무해서 ㅠㅠ.. 
    나중에 기회가 되면 자세히 다루어 보아야겠다.)
- [Spring boot](https://spring.io/projects/spring-boot#overview)
    - 독립된 형태로 출시가 가능한 단계의 스프링 기반 어플리케이션을 간단하게 만들 수 있는 프로젝트이다.
    - tomcat, jetty, undertow가 임베디드되어있다.
    - 간단한 API를 개발할 때 주로 사용된다.
- 그외 프로젝트들은 [여기](https://spring.io/projects)를 참고하자.

## 스프링 프레임워크의 인기

IntelliJ IDE로 유명한 jetbrains 사에서 개발자 7,000여명을 대상으로 한 설문조사에 의하면, 약 56%가 Spring Boot를 사용하고 있고, 43%는 Spring MVC를 사용하고 있다고 한다. (복수 응답)

> 이외에도 흥미로운 내용이 많으니 궁금하면 [여기](https://www.jetbrains.com/ko-kr/lp/devecosystem-2019/)서 구경해 보자.

자바 웹 프레임워크 순위(popular java web frameworks)를 구글링 해봐도 스프링은 모든 검색 결과에서 상위권에 랭크되어 있다.

개발자들은 스프링을 **도대체 왜** 이렇게 많이 사용하는 걸까?

# 스프링을 사용해야 하는 이유

> 아래 내용은 baeldung의 포스트를 참고하여 작성했다.<br>
> [https://www.baeldung.com/spring-why-to-choose#why_choose_spring](https://www.baeldung.com/spring-why-to-choose#why_choose_spring)


## 1. 사용성

'얼마나 사용하기 쉬운가?' 개발자가 프레임워크를 선택할 때 가장 중요한 이유 중 하나이다.

스프링은 여러가지 configuration 옵션을 통해 개발자들이 원하는 설정을 쉽게 할 수 있도록 한다. 또, 훌륭한 문서와 튜토리얼을 제공한다.

> 약 15분이면 따라할 수 있는 스프링의 ['Building a RESTful Web Service' 튜토리얼 페이지](https://spring.io/guides/gs/rest-service/)

## 2. 모듈성

스프링은 모듈화가 매우 잘 되어있다. 전체를 사용해도 되며, 필요한 모듈만 골라서 사용할 수 있다. 심지어 Hibernate나 Struts 등과 같은 다른 프레임워크도 함께 사용할 수 있다.

## 3. 테스트의 용이함

스프링은 TDD(Test Driven Development, 테스트 주도 개발)을 지향한다. 스프링 어플리케이션은 유닛 테스트가 가능하도록 대부분 POJO 단위로 구성되어 있다. 또, 유닛 테스트가 복잡해질 수 있는 MVC 등의 시나리오를 위해서는 Mock 객체를 제공한다.

## 4. 안정성

스프링은 오래된 역사를 가지고 있다. 그만큼 큰 스케일의 어플리케이션에서 발생하는 대부분의 문제 해결을 위한 기본적인 솔루션이 될 수 있었다.

게다가, 매일 매일 새로운 언어와 엔터프라이즈 솔루션에 대한 지원이 진행되고 있다.

## 5. 대규모 커뮤니티

또 다른 중요한 항목이다. 어떠한 프레임워크나 라이브러리에서는 혁신이 일어나며, 그 혁신이 일어날 수 있는 최고의 장소는 커뮤니티이다. 스프링은 Pivotal Software에서 이끌고 수많은 단체와 개발자들에 의해 뒷받침되고 있다. 

이외에도 각 프로젝트마다 수많은 장점이 있겠지만, 스프링 프레임워크에 대한 전반적인 장점만을 다루었다. 개인적인 경험으로는 1번의 사용성과 5번의 대규모 커뮤니티가 개발할 때 가장 중요한 요소라고 생각하는데, 스프링은 그 두 가지를 아주 훌륭하게 충족하고 있다.

*절대적인 요소는 아니어도 개발 능력은 구글링 실력에 많은 도움을 받을 때도 있지 않은가? ㅎㅎ*<br>
(그 구글링도 잘하려면 일단 사람들의 관심과 자료가 많아야 한다.)

# 마치며

스프링 프레임워크에 대한 간략한 소개를 해보았다. 이 글을 정리하면서 스프링 개발자로서의 경험을 떠올려 보니 고개가 저절로 끄덕여지는 내용들이 많았다.<br>
아직 경험해보지 못한 모듈이 많은데, 언젠가는 각 모듈별로 정리해볼 수 있으면 좋겠다.