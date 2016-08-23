package com.hui.advalidationdemo;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext-ldap.xml" })
public class ADAuthSpringTest {

	@Autowired
	public ADAuthSpring adValidation;
	
	@Test
	public void testAuth() {
		Assert.assertTrue(adValidation.authenticate("abc", "123abc."));
	}

}
