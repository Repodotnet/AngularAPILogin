using AngularLogin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;

namespace AngularLogin.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    public AngularLoginContext db;
    public UsersController(AngularLoginContext _db)
    {
      db = _db;
    }

    public IActionResult Get()
    {
      return Ok(db.User);
    }

    [HttpPost]
    public IActionResult Register(User user)
    {
      var u = db.User.Where(t => t.Email == user.Email).FirstOrDefault();
      if (u == null)
      {
        db.User.Add(user);
        db.SaveChanges();
        return Ok(user);
      }
      else
        return BadRequest("Email already exists");

    }

    [HttpPost("UserLogin")]
    public IActionResult Login(UserModel user)
    {
      var u = db.User.Where(t => t.UserName == user.UserName && t.Password==user.Password).FirstOrDefault();
      if (u != null)
      {
        return Ok();
      }
      else
        return Unauthorized();

    }
  }
}
