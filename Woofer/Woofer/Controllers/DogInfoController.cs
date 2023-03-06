using Microsoft.AspNetCore.Mvc;

namespace Woofer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DogInfoController : ControllerBase
    {
        private readonly DataContext _db;

        public DogInfoController(DataContext db)
        {
            _db = db;
        }

        [HttpDelete]
        [Route("Delete")]
        public IActionResult Delete(int id)
        {
            var obj=_db.Dogs.Where(x => x.ID == id).ToList().FirstOrDefault();
            
            _db.Dogs.Remove(obj);
            _db.SaveChanges();
            return Content(obj.Name.ToString());
        }

        [HttpPost]
        [Route("Save")]
        public IActionResult Save(DogInfo test)
        {

            _db.Dogs.Add(test);
            _db.SaveChanges();
            return Content(test.Name);
        }


        [HttpGet]
        public IEnumerable<DogInfo> Get()
        {
            IEnumerable<DogInfo> objCategoryList = _db.Dogs.ToList();
            return objCategoryList;
        }


    }
}
