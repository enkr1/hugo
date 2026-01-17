---
title: "Euclidean Algorithm: Finding the Greatest Common Divisor (GCD)"
date: 2024-05-22 23:22:04
tags:
  - "algorithm"
  - "math"
  - "java"
  - "gcd"
  - "greatest-common-divisor"
categories:
  - "Software Engineering"
  - "Data Structures & Algorithms"
subtitle: "Efficiently Determine the Greatest Common Divisor (GCD)"
description: "Discover the Euclidean Algorithm, an efficient method for finding the greatest common divisor (GCD) of two numbers. This guide includes a step-by-step explanation and Java implementation, perfect for software engineers and algorithm enthusiasts."
keywords:
  - "Algorithm notes"
  - "Euclidean algorithm"
  - "GCD"
  - "Greatest common divisor"
  - "Java programming"
  - "Software engineering"
  - "Algorithm tutorials"
  - "GCD Java example"
  - "Euclidean algorithm example"
  - "Mathematical algorithms"
---

## What is Euclidean Algorithm?
The Euclidean Algorithm is a straightforward and efficient method for **finding the greatest common divisor (GCD)** or **greatest common factor (GCF) of two numbers**. It leverages the principle that the GCD of two numbers doesn't change if you subtract the smaller number from the larger one until one of them becomes zero.

## Quick Steps to Memorise the Euclidean Algorithm
1. **Start with Two Numbers**: Identify the larger number as `a` and the smaller number as `b`.
2. **Check for Zero**: If `b` is zero, `a` is the GCD. Done!
3. **Get Remainder**: Divide `a` by `b` to find the remainder `r`.
4. **Swap Values**: Set `a` to `b` and `b` to `r`.
5. **Repeat**: Go back to step 2.
6. **Finish**: When `b` becomes zero, the GCD is the current value of `a`.

## Mnemonic to Remember
**"Big Zero, Divide(Remain) Swap Repeat, Zero's the GCD"**
- **Big**: Start with two numbers, `a` (big) and `b` (small).
- **Zero**: Check if `b` is zero.
- **Divide**: Divide `a` by `b` to get `r` (remainder).
- **Swap**: Swap `a` with `b`, and `b` with `r`.
- **Repeat**: Repeat the process.
- **Zero's the GCD**: When `b` is zero, `a` is the GCD.

## Quick Example Walkthrough
1. **Start**: `a = 56`, `b = 15`
2. **Divide**: 56 ÷ 15 = 3 R11 → `a = 15`, `b = 11`
3. **Divide**: 15 ÷ 11 = 1 R4 → `a = 11`, `b = 4`
4. **Divide**: 11 ÷ 4 = 2 R3 → `a = 4`, `b = 3`
5. **Divide**: 4 ÷ 3 = 1 R1 → `a = 3`, `b = 1`
6. **Divide**: 3 ÷ 1 = 3 R0 → `a = 1`, `b = 0`

> GCD = 1

## Example in Java
Here's an example implementation of the Euclidean algorithm to find the GCF in **Java**:
```java
public static int findGCF(int a, int b) {
    while (b != 0) {
        int remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
```

Let's consider an example to find the GCF of two numbers, 48 and 36:
```java
int a = 48;
int b = 36;
int gcf = findGCF(a, b);
System.out.println("GCF of " + a + " and " + b + " is: " + gcf);
```

> **Output**: GCF of 48 and 36 is: 12

In this example, we start with `a = 48` and `b = 36`. We follow the Euclidean algorithm steps:
1. `b` is not zero, so we calculate the remainder: `remainder = 48 % 36 = 12`.
2. We set `a` to `b` (36) and `b` to the remainder (12).
3. Repeat step 1 with the new values: `remainder = 36 % 12 = 0`.
4. Since `b` is now zero, we return `a` (12) as the GCF of 48 and 36.

The Euclidean algorithm efficiently calculates the GCF, and it works well for both small and large numbers.

Here's a precise explanation of the Euclidean algorithm to find the greatest common divisor (GCD) or greatest common factor (GCF) of two numbers in Java:

```java
public class EuclideanAlgorithm {
    public static int findGCF(int a, int b) {
        // Ensure a is the larger number
        if (a < b) {
            int temp = a;
            a = b;
            b = temp;
        }

        // Apply the Euclidean algorithm
        while (b != 0) {
            int remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    }

    public static void main(String[] args) {
        int a = 48;
        int b = 36;
        int gcf = findGCF(a, b);
        System.out.println("GCF of " + a + " and " + b + " is: " + gcf);
    }
}
```

> **Output**: GCF of 48 and 36 is: 12
