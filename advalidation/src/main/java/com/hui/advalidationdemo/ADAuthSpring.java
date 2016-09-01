package com.hui.advalidationdemo;

import static com.hui.advalidationdemo.constant.ApplicationConstants.buildADPath;
import static org.acegisecurity.ldap.LdapUtils.closeContext;

import javax.naming.directory.DirContext;

import org.springframework.ldap.core.LdapTemplate;


public class ADAuthSpring {
	private LdapTemplate ldapTemplate;

	public void setLdapTemplate(LdapTemplate ldapTemplate) {
		this.ldapTemplate = ldapTemplate;
	}

	public boolean authenticate(String userName, String password) {
		DirContext ctx = null;
		String distinguishedName = null;
		distinguishedName = buildADPath(userName);
		System.out.println("userName:" + userName + " map distinguishedName:" + distinguishedName);
		try {
			distinguishedName = buildADPath(userName);
			System.out.println("userName:" + userName + " map distinguishedName:" + distinguishedName);

			ctx = ldapTemplate.getContextSource().getContext(distinguishedName, password);
			System.out.println("authenticate success distinguishedName:" + distinguishedName + " userName:" + userName);
			return true;
		} catch (Exception e) {
			System.out.println("authenticate fail distinguishedName:" + distinguishedName + " userName:" + userName);
			return false;
		} finally {
			closeContext(ctx);
		}
	}

	
}