package com.revature.repository;

import java.util.List;

public interface DAO<T> {

    void create(T t);

    T getById(int id);

    default List<T> getAll() {
        return null;
    }

    void update(T t);

    void deleteById(int id);
}