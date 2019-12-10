insert into newuser (
    user_email,
    user_password
)values(
    ${email},
    ${hash}
)
returning user_id, user_email;