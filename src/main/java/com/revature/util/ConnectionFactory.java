package com.revature.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    private static Connection instance;

    private static final String url =
            "jdbc:postgresql://java-react.cofxvzttfcqt.us-east-1.rds.amazonaws.com:5432/postgres?currentSchema=runtime_terrors_p1";
    private static final String username = "postgres";
    private static final String password = "JS!6mm2194n02";

    public static Connection getConnection() throws SQLException{
        if(instance == null || instance.isClosed()){
            instance = DriverManager.getConnection(url, username, password);
        }
        return instance;
    }
    private ConnectionFactory(){}
}