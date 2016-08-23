package com.hui.advalidationdemo;

import static java.lang.String.format;
import static org.acegisecurity.ldap.LdapUtils.closeContext;
import static org.apache.commons.lang3.StringUtils.isBlank;

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

	private String buildADPath(String userName) {
		String adPathTemplate = "%s@adservice.com";
		if (isBlank(adPathTemplate)) {
			System.out.println("ad.path template do not exist in config.properties please config it");
			return null;
		}
		System.out.println("ad.path template is " + adPathTemplate);
		try {
			String adPath = format(adPathTemplate, userName);
			System.out.println("adPath is:" + adPath);
			return adPath;
		} catch (Exception e) {
			System.out.println("ad path template format error");
			return null;
		}

	}
}