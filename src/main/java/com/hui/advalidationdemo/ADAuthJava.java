package com.hui.advalidationdemo;

import static javax.naming.Context.INITIAL_CONTEXT_FACTORY;
import static javax.naming.Context.PROVIDER_URL;
import static javax.naming.Context.SECURITY_AUTHENTICATION;
import static javax.naming.Context.SECURITY_CREDENTIALS;
import static javax.naming.Context.SECURITY_PRINCIPAL;

import java.util.Hashtable;

import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

public class ADAuthJava {

	public static boolean authenticate(String host, String post, String username, String password) {
		DirContext ctx = null;
		Hashtable<String, String> HashEnv = initADServer(host, post, username, password);
		try {
			ctx = new InitialDirContext(HashEnv);
			System.out.println("Authenticate Success!");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if (null != ctx) {
				try {
					ctx.close();
					ctx = null;
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

	private static Hashtable<String, String> initADServer(String host, String post, String username, String password) {
		Hashtable<String, String> HashEnv = new Hashtable<String, String>();
		HashEnv.put(SECURITY_AUTHENTICATION, "simple");
		HashEnv.put(SECURITY_PRINCIPAL, username);
		HashEnv.put(SECURITY_CREDENTIALS, password);
		HashEnv.put(INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		HashEnv.put("com.sun.jndi.ldap.connect.timeout", "3000");
		HashEnv.put(PROVIDER_URL, "ldap://" + host + ":" + post);
		return HashEnv;
	}
}